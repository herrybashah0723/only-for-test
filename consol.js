const oddNumber = [
    {userID: 11, firstName: "hamza", productName: "Baloon", price: 3050},
    {userID: 12, firstName: "tayyab", productName: "Apple", price: 6030},
    {userID: 13, firstName: "zahiab", productName: "Banana", price: 5020},
];

const ans = oddNumber.find((number) =>{
    return number.userID===1;
});
console.log(ans);
