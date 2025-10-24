//Quick Exercise 2
		//Destructure user object to get name and age
		//Combine two arrays frontend = ["React","Vue"] and backend = ["Node","Express"] using the spread operator.
		//write a function average(...nums) that uses the rest operator to compute average

		const frontend = ["React","Vue"];
		const backend = [...frontend, "Node", "Express"];
		console.log(backend);

		const average = (...nums) => {
			if (nums.length === 0){
				return 0;
			}

			const sum = nums.reduce((total,num) =>total + num, 0);

		return sum / nums.length;
		};
		console.log(average(10, 20, 30)); // Output: 20