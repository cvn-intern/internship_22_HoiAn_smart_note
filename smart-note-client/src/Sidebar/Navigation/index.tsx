import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';
import Categories from './Categories';
import Labels from './Labels';

const cx = classNames.bind(styles);

const Navigation = () => {
    return (
        <div>
            <Categories />
            <Labels />
        </div>
    );
};

export default Navigation;
