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
                <Form>
                    <label htmlFor="name">New Project</label>
                    <Field id="name" name="name" placeholder="Project Name" />
                    <button type="submit">Crete</button>
                </Form>
            </Formik>
        </div>
    );
};
