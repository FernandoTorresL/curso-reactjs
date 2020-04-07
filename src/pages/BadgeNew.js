import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">

						<div className="col-6">
							<Badge
								firstName="Fernando"
								lastname="Torres"
								twitter="fertorresmx"
								jobTitle="Data Scientist"
								avatar="https://s.gravatar.com/avatar/df4dcd1833595186c053f0cf369a6c79?s=80"
							/>
						</div>

						<div className="col-6">
							<BadgeForm />
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default BadgeNew;
