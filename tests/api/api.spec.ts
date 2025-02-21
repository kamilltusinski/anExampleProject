import { test, expect } from '@playwright/test'
import exp from 'constants'

test.describe.parallel('API Testing',() => {
    const baseURL = 'https://reqres.in/api'

    test('GET API Test - Assert 200 Response Status', async({request})=>{
        const response = await request.get(`${baseURL}/users/2`)
        expect(response.status()).toBe(200)
    })

    test('GET API Test - Assert 404 Response Status', async ({request}) => {
        const response = await request.get(`${baseURL}/users/test01`)
        expect(response.status()).toBe(404)
    })
})