import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@components/Styles/V1/helpers.module.css';

interface Props {}

const CastInfo = (props: Props) => {
	return (
		<div className={classes['cast-info']}>
			<h4 className={classes['group-title']}>Cast & Crew</h4>
			<div className={classes.list}>
				<ul className={classes.crew}>
					<li>James</li>
					<li>George Lucas</li>
				</ul>
				<ul className={classes.crew}>
					<li>Billy</li>
					<li>George Lucas</li>
				</ul>
				<ul className={classes.crew}>
					<li>Liu Kang</li>
					<li>George Lucas</li>
				</ul>
				<ul className={classes.crew}>
					<li>Raul</li>
					<li>George Lucas</li>
				</ul>
				<ul className={classes.crew}>
					<li>Samantha</li>
					<li>George Lucas</li>
				</ul>
			</div>
			<h4 className={classes['group-title']}>Director</h4>
			<div className={classes.list}>
				<ul className={classes.crew}>
					<li>James</li>
					<li>George Lucas</li>
				</ul>
			</div>
		</div>
	);
};

export default CastInfo;
