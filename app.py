import flask
import pickle
import pandas as pd

# Use pickle to load in the pre-trained model
with open(f'model/model3.pkl', 'rb') as f:
    model = pickle.load(f)

# Initialise the Flask app
app = flask.Flask(__name__, template_folder='templates')

# Set up the main route


@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        # Just render the initial form, to get input
        return(flask.render_template('main.php'))

    if flask.request.method == 'POST':
        # Extract the input
        age = flask.request.form['age']
        if flask.request.form['sex'] == 'male':
            sex = 1
        else:
            sex = 0
        bmi = flask.request.form['bmi']
        children = flask.request.form['children']
        if flask.request.form['smoker'] == 'yes':
            smoker = 1
        else:
            smoker = 0

        # Make DataFrame for model

        input_variables = pd.DataFrame([[age, sex, bmi, children, smoker]],
                                       columns=['age', 'sex', 'bmi',
                                                'children', 'smoker'],
                                       dtype=float,
                                       index=['input'])

        # Get the model's prediction
        prediction = model.predict(input_variables)[0]

        # Render the form again, but add in the prediction and remind user
        # of the values they input before
        return flask.render_template('main.php',
                                     original_input={'Age': age,
                                                     'Sex': sex,
                                                     'BMI': bmi,
                                                     'Children': children,
                                                     'Smoker': smoker,
                                                     },
                                     result=prediction,
                                     )


if __name__ == '__main__':
    app.run()
