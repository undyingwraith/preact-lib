import { Signal } from "@preact/signals";
import { Button, IButtonProps } from "../atoms";
import { ButtonGroup } from "./ButtonGroup";

export interface IFormButtonProps {
	editing: Signal<boolean>;
	isNew?: boolean;
	extraButtons?: IButtonProps[];
}

export function FormButtons(props: IFormButtonProps) {
	return (
		<ButtonGroup>
			{props.editing.value ? (<>
				{props.isNew !== true && (<>
					<Button
						text={'Cancel'}
						//disabled={formik.isSubmitting}
						onClick={() => {
							//formik.resetForm();
							props.editing.value = false;
						}}
					/>
					<Button
						type={'reset'}
						text={'Reset'}
					//disabled={!formik.dirty || formik.isSubmitting}
					/>
				</>)}
				<Button
					text={'Save'}
					type={'submit'}
				//disabled={!formik.dirty || formik.isSubmitting}
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
