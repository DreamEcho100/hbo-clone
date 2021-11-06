import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface Props {}

const CastInfo = (props: Props) => {
	const crewListClasses = joinClassNames(
		classes.crew,
		helpers.dFlex,
		helpers.flexWrap
	);

	return (
		<section className={classes['cast-info']}>
			<h4 className={classes['group-title']}>Cast & Crew</h4>
			<div className={classes.list}>
				<ul className={crewListClasses}>
					<li>James</li>
					<li>George Lucas</li>
				</ul>
				<ul className={crewListClasses}>
					<li>Billy</li>
					<li>George Lucas</li>
				</ul>
				<ul className={crewListClasses}>
					<li>Liu Kang</li>
					<li>George Lucas</li>
				</ul>
				<ul className={crewListClasses}>
					<li>Raul</li>
					<li>George Lucas</li>
				</ul>
				<ul className={crewListClasses}>
					<li>Samantha</li>
					<li>George Lucas</li>
				</ul>
			</div>
			<h4 className={classes['group-title']}>Director</h4>
			<div className={classes.list}>
				<ul className={crewListClasses}>
					<li>James</li>
					<li>George Lucas</li>
				</ul>
			</div>
		</section>
	);
};

export default CastInfo;
