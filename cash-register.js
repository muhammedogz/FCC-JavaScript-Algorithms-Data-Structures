function checkCashRegister(price, cash, cid) {

	const value = {
		"ONE HUNDRED": 10000,
		TWENTY: 2000,
		TEN: 1000,
		FIVE: 500,
		ONE: 100,
		QUARTER: 25,
		DIME: 10,
		NICKEL: 5,
		PENNY: 1,
	};

    // convert all money to cents
	let due = convertCent(cash) - convertCent(price);

    // create object
	let result = {
		status: null,
		change: [],
	};

	for (let i = cid.length - 1; i >= 0; i--) {
		let bill = cid[i];
		let amount = 0;

		let billAmount = convertCent(bill[1]);

        // check cash register if this amount in the register
		while (due >= value[bill[0]] && billAmount >= value[bill[0]]) {
			billAmount -= value[bill[0]];
			due -= value[bill[0]];
			amount += value[bill[0]];
		}

        // set status
		if (billAmount == 0) {
			result.status = "CLOSED";
		} else {
			result.status = "OPEN";
		}
		if (amount > 0) {
			result.change.push([bill[0], amount / 100]);
		}
	}

	if (due > 0) {
		result = {
			status: "INSUFFICIENT_FUNDS",
			change: [],
		};
	} else if (result.status == "CLOSED") {
		result.change = cid;
	}

	return result;
}

const convertCent = money => money * 100;

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.5],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
);


