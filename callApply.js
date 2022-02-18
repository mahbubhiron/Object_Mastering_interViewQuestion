// কোন একটা অবজেক্টের মেথডকে অন্য একটা অবজেক্টের মেথড হিসাবে ব্যাবহার করতে চাই, সে ক্ষেত্রে আমরা "bind","call" অথবা "apply" ব্যাবহার করতে পারি । "call" ব্যাবহারের ক্ষেত্রে ফাংশনের প্যারামিটারের ভ্যালুগুলোকে কমা ছেপারেট করে পাঠাতে হবে, এবং "apply" ব্যাবহার করলে এক্ষেত্রে ফাংশনের প্যারামিটারের ভ্যালুগুলোকে এরে হিসাবে পাঠাতে হবে। 
// create method inside object
const normalPerson = {
    firstName: 'Mahbub',
    lastName: 'Alom',
    salary: 15000,
    getFullName: function(){
        console.log('Fulll Name = ',this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary -  amount - tips - tax;
        return this.salary;
    }
}

normalPerson.getFullName();

normalPerson.chargeBill(3000, 100, 20);
console.log('After pay bill "normalPerson" current amount is = ',normalPerson.salary+'TK');

// কিভাবে একটা অবজেক্টের মেথডকে অন্য একটা অবজেক্টের মেথড হিসাবে ব্যাবহার করতে হয়, "bind" দিয়ে।
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 20000
}
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000, 120, 25);
console.log('After pay bill "heroPerson" current amount is = ',heroPerson.salary+'TK');

// কিভাবে একটা অবজেক্টের মেথডকে অন্য একটা অবজেক্টের মেথড হিসাবে ব্যাবহার করতে হয়, সরাসরি "call" দিয়ে।
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 25000
}
normalPerson.chargeBill.call(friendlyPerson, 3000, 150, 30);
console.log('After pay bill "friendlyPerson" current amount is = ',friendlyPerson.salary+'TK');

// কিভাবে একটা অবজেক্টের মেথডকে অন্য একটা অবজেক্টের মেথড হিসাবে ব্যাবহার করতে হয়, সরাসরি "apply" দিয়ে।
const heavyPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 30000
}
normalPerson.chargeBill.apply(heavyPerson, [3000, 150, 30]);
console.log('After pay bill "heavyPerson" current amount is = ',heavyPerson.salary+'TK');