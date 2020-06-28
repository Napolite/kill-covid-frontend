import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from './countries.js';
import "./EvalContent.css";
import axios from "axios";


let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let countryOptions = countries.map(country => (
	<option key={country} value={country}>
		{country}
	</option>
));
let ratingOptions = ratings.map(rating => (
	<option key={rating} value={rating}>
		{rating}
	</option>
));

class EvalContent extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			age:"",
			state: "",
			address: "",
			tel:"0",
			email:"",
			countryVisited: "",
			ownCountry: "",
			otherSymptoms: "",
			otherRate: "",
			coughRate: "",
			feverRate: "",
			fatigueRate: "",
			respRate: "",
			yesBtnActive: false,
			pageNo: 1,
			isCoughChecked: false,
			isFeverChecked: false,
			isFatigueChecked: false,
			isRespiratoryChecked: false,
			isOthersChecked: false,
			visitedCountry: false
		};
	}

	switchPage = () => {
		this.setState(prevState => {
			return { pageNo: prevState.pageNo + 1 };
		});
	};

	handleChange = (event,type) => {
		let name =  event.target.name;
		let value;
		if(type){
			value =  event.target.checked;
		}else{
			event.preventDefault();
			value = event.target.value;
		}

		this.setState({[name]: value})
	}

	renderComp = () => {
		const { pageNo } = this.state;
		switch (pageNo) {
			case 1:
				return (
					<>
						<em>First, tell us a few things about you</em>
						{/* eslint-disable-next-line */}
						<a href='#' onClick={this.switchPage}>
							{" "}
							Continue{" "}
						</a>
					</>
				);

			case 2:
				return (
					<>
						<em> What is your name ? </em>
						<input
							className='eval-first-name-input'
							type='text'
							name='firstName'
							placeholder='First Name'
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
						<input
							className='eval-last-name-input'
							type='text'
							name='lastName'
							placeholder='Last Name'
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
						<em> How old are you ? </em>
						<input
							className='eval-last-name-input'
							type='number'
							name='Age'
							placeholder='Your Age'
							value={this.state.age}
							onChange={this.onAgeChange}
						/>
					</>
				);
			case 3:
			return(<>
				<em>Contact Info</em>
				<input
					className='eval-first-name-input'
					type='text'
					name='phone-number'
					placeholder='Phone Number'
					value={this.state.tel}
					onChange={this.onTelChange}
				/>
				<input
					className='eval-last-name-input'
					type='text'
					name='email'
					placeholder='email'
					value={this.state.email}
					onChange={this.onEmailChange}
				/>
			</>)
			case 4:
				return (
					<div>
						<em> In the last 14 days, have you traveled to any country? </em>
						<div className='yes-no-btn'>
							<button className='yes inactive' onClick={this.yesButtonClick}>
								Yes
							</button>
							<button className='inactive no' onClick={this.noButtonClick}>
								No
							</button>
						</div>

						{this.state.yesBtnActive 
						? (
								<select
									id='countries'
									name='countryVisited'
									value={this.state.countryVisited}
									onChange={this.handleChange}
								>
									<option value="select country"  hidden defaultValue>
										Select the country
									</option>
									{countryOptions}
								</select>
						  ) 
						: null
						}
					</div>
				);

			case 5:
				return (
					<>
						<select
							id='countries'
							name='ownCountry'
							value={this.state.ownCountry}
							onChange={this.handleChange}
						>
							<option value="select Country"  defaultValue hidden>
									Select the country
								</option>
							{countryOptions}
						</select>
						<input
							className='eval-state-input'
							type='text'
							name='state'
							placeholder='State'
							value={this.state.state}
							onChange={this.handleChange}
						/>
						<input
							className='eval-address-input'
							type='text'
							name='address'
							placeholder='Address'
							value={this.state.address}
							onChange={this.handleChange}
						/>
					</>
				);
			case 6:
				return (
					<>
						<em>What symptoms are you showing ? </em>
						<div className='symptom-input'>
							<input
								className='radio-btns'
								type='checkbox'
								onChange={(e) => this.handleChange(e,'checkbox')}
								name='isCoughChecked'
								value='Cough'
							/>
							<label htmlFor='cough'>Cough</label>
							{this.state.isCoughChecked 
								? (
									<div className='rating'>
										<em>On a scale of 1-10, how serious is it ?</em>
										<select
											name='coughRate'
											value={this.state.coughRate}
											onChange={this.handleChange}
										>
											{ratingOptions}
										</select>
									</div>
									) 
								: null
								}
						</div>

						<div className='symptom-input'>
							<input
								className='radio-btns'
								type='checkbox'
								onChange={(e) => this.handleChange(e,'checkbox')}
								id='fever'
								name='isFeverChecked'
								value='Fever'
							/>
							<label htmlFor='fever'>Fever</label>
							{this.state.isFeverChecked ? (
								<div className='rating'>
									<em>On a scale of 1-10, how serious is it ?</em>
									<select
										name='feverRate'
										value={this.state.feverRate}
										onChange={this.handleChange}
										id='rating'
									>
										{ratingOptions}
									</select>
								</div>
							) : (
								console.log()
							)}
						</div>

						<div className='symptom-input'>
							<input
								className='radio-btns'
								type='checkbox'
								onChange={(e) => this.handleChange(e,'checkbox')}
								id='fatigue'
								name='isFatigueChecked'
								value='Fatigue'
							/>
							<label htmlFor='fatigue'>Fatigue</label>
							{this.state.isFatigueChecked ? (
								<div className='rating'>
									<em>On a scale of 1-10, how serious is it ?</em>
									<select
										name='fatigueRate'
										value={this.state.fatigueRate}
										onChange={this.handleChange}
										id='rating'
									>
										{ratingOptions}
									</select>
								</div>
							) : (
								console.log()
							)}
						</div>

						<div className='symptom-input'>
							<input
								className='radio-btns'
								type='checkbox'
								onChange={(e) => this.handleChange(e,'checkbox')}
								id='respiratory'
								name='isRespiratoryChecked'
								value='Respiratory'
							/>
							<label htmlFor='respiratory'>Respiratory Problems</label>
							{this.state.isRespiratoryChecked ? (
								<div className='rating'>
									<em>On a scale of 1-10, how serious is it ?</em>
									<select
										name='respRate'
										value={this.state.respRate}
										onChange={this.handleChange}
										id='rating'
									>
										{ratingOptions}
									</select>
								</div>
							) : (
								console.log()
							)}
						</div>

						<div className='symptom-input'>
							<input
								className='radio-btns'
								type='checkbox'
								onChange={(e) => this.handleChange(e,'checkbox')}
								id='others'
								name='isOthersChecked'
								value='Others'
							/>
							<label htmlFor='others'>Others</label>
							{this.state.isOthersChecked ? (
								<div className='rating'>
									<input
										value={this.state.otherSymptoms}
										onChange={this.handleChange}
										className='eval-others-input'
										type='text'
										name='otherSymptoms'
										placeholder='What symptom ?'
									/>
									<em>On a scale of 1-10, how serious is it ?</em>
									<select
										name='otherRate'
										value={this.state.otherRate}
										onChange={this.handleChange}
										id='rating'
									>
										{ratingOptions}
									</select>
								</div>
							) : (
								console.log()
							)}
						</div>
					</>
				);
			default:
				return <em> The end </em>;
		}
	};

	yesButtonClick = event => {
		event.preventDefault();
		try {
			document.querySelector(".active").classList.remove("active");
		} catch (err) {}

		event.target.classList.remove("inactive");
		event.target.classList.add("active");
		this.setState({ yesBtnActive: true, visitedCountry: true });
	};

	noButtonClick = event => {
		event.preventDefault();
		try {
			document.querySelector(".active").classList.remove("active");
		} catch (err) {}
		event.target.classList.remove("inactive");
		event.target.classList.add("active");
		this.setState({ yesBtnActive: false, visitedCountry: false });
	};

	displayContinueBtn = () => {
		if (this.state.pageNo > 1 && this.state.pageNo < 7) {
			return (
				<>
					{/* eslint-disable-next-line */}
					<button
						type='button'
						className='eval-next-btn'
						href='#'
						onClick={this.switchPage}
					>
						Next
					</button>
				</>
			);

		} else if(this.state.pageNo === 7){
			return(
			<>
			{/* eslint-disable-next-line */}
				<Link 
				to='/Patient'
				className='eval-next-btn'
				onClick={this.postDetails}
				>
					Submit
				</Link>
		</>)
		}
		else if (this.state.pageNo === 8) {
			return (
				<>
					{/* eslint-disable-next-line */}
					<Link to='/Patient'className='eval-next-btn'>
							{" "}
							Finish{" "}
					</Link>
				</>
			);
		}
	};
	onFirstNameChange = e => {
		this.setState({ firstName: e.target.value });
	};
	onLastNameChange = e => {
		this.setState({ lastName: e.target.value });
	};
	onAgeChange = e =>{
		this.setState({age:e.target.value})
	}
	onTelChange = e =>{
		let num = null
		num = e.target.value
		!isNaN(parseInt(num[num.length -1])) ? this.setState({tel:e.target.value}):console.log()
		// console.log(e.target.value)
	}
	onEmailChange = e =>{
		this.setState({email:e.target.value})
	}
	handleSelectChange = e => {
		this.setState({ visitedCountry: e.target.value });
	};
	handleOwnCountryChange = e => {
		this.setState({ ownCountry: e.target.value });
	};
	handleStateChange = e => {
		this.setState({ state: e.target.value });
	};
	handleAddressChange = e => {
		this.setState({ address: e.target.value });
	};
	handlesymptomchange = e => {
		this.setState({ otherSymptoms: e.target.value });
	};
	feverRate = e => {
		this.setState({ feverRate: e.target.value });
	};
	coughRate = e => {
		this.setState({ coughRate: e.target.value });
	};
	respRate = e => {
		this.setState({ respRate: e.target.value });
	};
	fatigueRate = e => {
		this.setState({ fatigueRate: e.target.value });
	};
	otherRate = e => {
		this.setState({ otherRate: e.target.value });
	};
	
	postDetails = e => {
		const addname = {
			// "access-token":'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTkyNjA4NjA2LCJqdGkiOiI2NmZlYzFhMy00YmEwLTRmMTYtYmQzYi01YjNmYzA1MjMyMjQiLCJleHAiOjE1OTI2MTk3NTJ9.qVCiqXkfjVn1vra4XIK1O0med5uh26tk1MlAbkuI',
			"firstName": this.state.firstName,
			"lastName": this.state.lastName,
			"signUpMethod":"Google-Account"
		};
		const add_profile={
			"email":this.state.email,
			"tel" : this.state.tel.toString(),
			"age":isNaN(this.state.age) ? 0 : this.state.age,
			"state": this.state.state,
			"address": this.state.address,
			"country": this.state.ownCountry
		}
		const add_symptoms = [
			// 
			{"countryVisited": this.state.countryVisited,
			"cough": this.state.isCoughChecked,
			"fever": this.state.isFeverChecked,
			"fatigue": this.state.isFatigueChecked,
			"resp": this.state.isRespiratoryChecked,
			"other": this.state.otherSymptoms},
			{"otherDegree": this.state.otherRate,
			"coughDegree": this.state.coughRate,
			"feverDegree": this.state.feverRate,
			"fatigueDegree": this.state.fatigueRate,
			"respDegree": this.state.respRate}
		];
		var cuid = null
		axios.post("https://fast-hamlet-28566.herokuapp.com/api/signup", addname).then(res => {
			cuid=res.data.uid
			console.log(cuid);
		});
		console.log(add_profile)
		var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidWlkIjoiYzI4MTg4ZTgtMTMwMy00MjM2LWI1MDYtYzRjNmJlY2Y1ZDMyIiwiaWF0IjoxNTkzMzEzMTU2LCJleHAiOjE1OTMzMTY3ODEsImp0aSI6IjEwZGI1ZjIzLTJjZjktNDIxMy04ZmRmLThmOWZmY2MzMzNiMyJ9.ObJbGjv3fvfuh6YQIP97DV6BgJOBaxB_O1hPaAlwz8w'
		const heders = {headers:{'access-token':token}}
		axios.put('https://fast-hamlet-28566.herokuapp.com/api/add_profile',add_profile,heders).then(res => {
			console.log(res);
			console.log(res.data)
		});
		axios.post('https://fast-hamlet-28566.herokuapp.com/api/add_symptoms',add_symptoms,heders).then(res=>{console.log(res)})
		this.switchPage()
		// console.log(addname);
		// console.log(add_symptoms);
	};

	render() {
		return (
			<div className='eval-content-container'>
				<form>
					{this.renderComp()}

					{this.displayContinueBtn()}
				</form>
			</div>
		);
	}
}

export default EvalContent;
