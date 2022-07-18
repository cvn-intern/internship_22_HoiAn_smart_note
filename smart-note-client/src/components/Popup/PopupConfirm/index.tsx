import classNames from 'classnames/bind';
import Popup, { PopupProps } from '..';
import Button from '../../Button';
import styles from './PopupConfirm.module.scss';

const cx = classNames.bind(styles);

interface PopupConfirmProps extends PopupProps {
    title: string;
    input?: boolean;
    placeholder?: string;
    inputValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose?: () => void;
    onConfirm?: () => void;
}

function PopupConfirm(props: PopupConfirmProps) {
    return (
        <Popup {...props}>
            <h4 className={cx('title')}>{props.title}</h4>
            {props.input && (
                <input
                    className={cx('input')}
                    type="text"
                    placeholder={props.placeholder}
                    value={props.inputValue}
                    onChange={props.onChange}
                />
            )}
            <div className={cx('buttons')}>
                <Button outline onClick={props.onClose}>
                    Cancel
                </Button>
                <Button primary onClick={props.onConfirm}>
                    Save
                </Button>
            </div>
        </Popup>
    );
}

export default PopupConfirm;
