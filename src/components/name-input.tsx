import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import {createCanvas} from "../functions/interviu";
import { useHistory } from "react-router-dom";

interface MyFormValues {
    name: string;
}

export const NameInputComponent: React.FC<{}> = () => {
    const history = useHistory()
    const initialValues: MyFormValues = { name: '' };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log(values.name)
                    createCanvas(values.name)
                        .then(() => {
                            console.log('A fost creat un nou canvas')
                            history.push("/canvas/" + values.name, );
                        })
                        .catch((eroare) => alert(eroare.message))
                    console.log({ values, actions });
                    actions.setSubmitting(false);
                }}
            >
                <Form >
                    <div className="container">
                        <div className="row justify-content-center mt-3">
                            <label htmlFor="name" className="h-50">Creează un proiect nou</label>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <Field  className="form-control " style={{width:"80%"}} id="name" name="name" placeholder="Nume proiect" />
                        </div>
                        <div className="row justify-content-center">
                            <button className="btn btn-primary mt-3" type="submit">Creează</button>
                        </div>
                    </div>



                </Form>
            </Formik>
        </div>
    );
};
