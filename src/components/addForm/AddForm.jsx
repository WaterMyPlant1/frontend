import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addPlant } from "../../store/actions/plantActions";
import plantSchema from "../validation/plantSchema";
import AddFormStyles from "./addStyles";

const AddForm = ({ setAdding }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nickname: "",
      species: "",
      h2oFrequency: 0,
    },
    validationSchema: plantSchema,
    onSubmit: (values) => {
      dispatch(addPlant(values));
      setAdding(false);
    },
  });

  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1> Add a new plant</h1>
        <div className="errors">
          {formik.errors.h2oFrequency && <p>{formik.errors.h2oFrequency}</p>}
          {formik.errors.nickname && <p>{formik.errors.nickname}</p>}
          {formik.errors.species && <p>{formik.errors.species}</p>}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="innerForm">
            <label>
              Nickname:
              <input
                name="nickname"
                id="nickname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
              />
            </label>

            <label>
              Species:
              <input
                name="species"
                id="species"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.species}
              />
            </label>
            <label>
              Next watering (days):
              <input
                name="h2oFrequency"
                id="h2oFrequency"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.h2oFrequency}
              />
            </label>
          </div>
          <div className="buttonContainer">
            <button onClick={() => setAdding(false)}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>

        <img src="https://bit.ly/2QMRGYs" alt="plants" />
      </div>
    </AddFormStyles>
  );
};

export default AddForm;
