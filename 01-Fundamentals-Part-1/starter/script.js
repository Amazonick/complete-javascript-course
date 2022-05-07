'use strict';
const outputText = document.querySelector('h1');

const johnMass = 92; //kg
const johnHeight = 1.95; //meter

const markMass = 78; //kg
let markHeight = 1.69; //meter

function calculateBmi(mass, height) {
	let bmi = mass / height ** 2;
	return Math.round(bmi * 100) / 100;
}

let johnBmi = calculateBmi(johnMass, johnHeight);
console.log('~ johnBmi:', johnBmi);

let markBmi = calculateBmi(markMass, markHeight);
console.log('~ markBmi:', markBmi);

let markHigherBMI = markBmi > johnBmi;
console.log('~ markHigherBMI:', markHigherBMI);

function compare() {
	if (johnBmi < markBmi) {
		outputText.innerHTML = `Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}).`;
		console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}).`);
	} else {
		outputText.innerHTML = `John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}).`;
		console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}).`);
	}
}

const body = document.querySelector('body');
const button = document.createElement('BUTTON');
button.classList.add('btn-primary');
const btnPrimary = document.querySelector('.btn-primary');
const t = document.createTextNode('Push me, choke me, pull my hair');
button.appendChild(t);
body.appendChild(button);

button.addEventListener('click', () => {
	markHeight;
	if (markHeight === 1.89) {
		outputText.innerHTML = `Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}).`;
		console.log('~ markHeight', markHeight);
		return (markHeight = 1.69);
	} else {
		outputText.innerHTML = `John's BMI (${johnBmi}) is lower than Mark's BMI (${markBmi}).`;
		return (markHeight = 1.89);
	}
});
