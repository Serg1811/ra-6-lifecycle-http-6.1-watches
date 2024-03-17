import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';
import WatchName from "../../type/WatchName";

interface Props {
    onAddWatch: (watch: WatchName) => void;
}

const AddWatchForm = ({ onAddWatch }: Props): ReactNode => {

    const [form, setForm] = useState({ name: '', timeZone: '' });

    const formChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addWatch = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        onAddWatch({ id: nanoid(), timeZone: +form.timeZone, watchName: form.name });

        setForm({ name: '', timeZone: '' });
    };

    return (
        <>
            <Form
                className="row row-cols-lg-auto gy-3 justify-content-center mt-4"
                onSubmit={addWatch}
            >
                <Form.Group className="col-12" controlId="name">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Например, Москва"
                        value={form.name}
                        onChange={formChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="col-12" controlId="timeZone">
                    <Form.Label>Временная зона</Form.Label>
                    <Form.Control
                        type="number"
                        name="timeZone"
                        placeholder="Например, 3"
                        value={form.timeZone}
                        onChange={formChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="col-12 align-self-end">
                    <Button variant="primary" type="submit">
                        Добавить
                    </Button>
                </Form.Group>
            </Form>
            <hr className="hr my-5"></hr>
        </>
    );
}

export default AddWatchForm;
