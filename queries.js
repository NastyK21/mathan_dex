const getdata = "SELECT * FROM market";
const checkuid ="SELECT s FROM market s WHERE s.uid =$1";
const addData = "INSERT INTO market(action,quantity,price,uid) VALUES($1,$2,$3,uuid_generate_v4()) ";
module.exports ={
    getdata,
    addData,
    checkuid
};
