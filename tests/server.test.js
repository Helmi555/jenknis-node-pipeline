const request=require('supertest')
const express=require('express')
const app=require('../src/server')


describe ('GET /ok1', () =>{
it('should return 200 ok', async() => {
    const res=await request(app).get('/ok1')
    expect(res.statusCode).toBe(200)
});
})

describe('GET /ok2',()=>{
it('should return ok 200', async() => {
    const res=await request(app).get('/ok2')
    expect(res.statusCode).toBe(200)
});
})

describe('GET /fail',()=>{
    it('should return 200 (but fail)', async() =>{
        const res=await request(app).get('/fail')
        expect(res.statusCode).toBe(200)
    })
})