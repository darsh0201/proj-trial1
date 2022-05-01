<!DOCTYPE html>
<html>
  <style>
    form {
      margin: auto;
      width: 35%;
    }

    .result {
      margin: auto;
      width: 35%;
      border: 1px solid #ccc;
    }
  </style>

  <head>
    <link rel="stylesheet" href="../static/main.css" />
  </head>
  <body>
    <div class="head"><h1>Health-Insurance Predictor</h1></div>
    <form action="{{ url_for('main') }}" method="POST" id="form" class="form">
      <fieldset>
        <legend>Input values:</legend>
        <div class="form-control">
          Age:
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Input Age"
            required
          />
          <br />
          <br />
          <small>Error message</small>
        </div>
        <div class="form-control">
          Sex:
          <input
            id="sex"
            name="sex"
            type="text"
            placeholder="Enter lowercase male or female "
            required
          />
          <br />
          <br />
          <small>Error message</small>
        </div>
        <div class="form-control">
          BMI:
          <input
            id="bmi"
            name="bmi"
            type="number"
            placeholder="Input BMI"
            required
          />
          <br />
          <br />
          <small>Error message</small>
        </div>
        <div class="form-control">
          Children:
          <input
            id="children"
            name="children"
            type="number"
            placeholder="Input Number of Children"
            required
          />
          <br />
          <br />
          <small>Error message</small>
        </div>
        <div class="form-control">
          Smoker:
          <input
            id="smoker"
            name="smoker"
            type="number"
            placeholder="Input lowercase yes or no"
            required
          />
          <br />
          <br />
          <small>Error message</small>
        </div>
        <input type="submit" />
      </fieldset>
    </form>

    <br />
    <div class="result" align="center">
      {% if result %} {% for variable, value in original_input.items() %}
      <b>{{ variable }}</b> : {{ value }} {% endfor %}
      <br />
      <br />
      Predicted Charge for Health Insurance:
      <p style="font-size: 50px">{{ result }}</p>
      {% endif %}
    </div>
  </body>
</html>
