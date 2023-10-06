 const { query } = require('express');
const pool = require('../../db');
 const queries = require("./queries");
 
const getdata = (req,res)=>{
    pool.query(queries.getdata, (error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
    
};

const addData = (req,res)=>{
    const{ action, quantity, price,uid} =req.body;
    pool.query(queries.checkuid,[uid],(error,results)=>{
        if(results.rows.length){
            res.send("exists");
        }
    
    
          pool.query(queries.addData,[action, quantity, price,uid],(error,results)=>{
          if(error) throw error;
           res.send("data added successfully");
         })
        })};

module.exports ={
    getdata,
    addData  
}
