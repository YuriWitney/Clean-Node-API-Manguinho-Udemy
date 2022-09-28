import request from "supertest"
import app from "../config/app"

describe('Body Parser Middleware', () => {
    it('', async () => {
        app.post('/test_body_parser', (request, response) => {
            response.send(request.body)
        })

        await request(app)
            .post('/test_body_parser')
            .send({ name: 'Rodrigo' })
            .expect({ name: 'Rodrigo' })
    })
})