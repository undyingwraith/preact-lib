import { Signal } from "@preact/signals";
import { useFormikContext } from "formik";
import { Button, ButtonGroup, IButtonProps } from '@preact-lib/components';

export interface IFormButtonProps {
    editing: Signal<boolean>;
    isNew?: boolean;
    extraButtons?: IButtonProps[];
}

export function FormButtons(props: IFormButtonProps) {
    const formik = useFormikContext();

    return (
        <ButtonGroup>
            {props.editing.value ? (<>
                {props.isNew !== true && (<>
                    <Button
                        text={'Cancel'}
                        disabled={formik.isSubmitting}
                        onClick={() => {
                            formik.resetForm();
                            props.editing.value = false;
                        }}
                    />
                    <Button
                        type={'reset'}
                        text={'Reset'}
                        disabled={!formik.dirty || formik.isSubmitting}
                    />
                </>)}
                <Button
                    text={'Save'}
                    type={'submit'}
                    disabled={!formik.dirty || formik.isSubmitting}
                />
            </>) : (<>
                <Button
                    text={'Edit'}
                    onClick={() => {
                        props.editing.value = true;
                    }}
                />
                {props.extraButtons?.map((props, k) => (<Button key={k} {...props} />))}
            </>)}
        </ButtonGroup>
    );
}