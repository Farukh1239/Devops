// test/backend-tests.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your backend code is in app.js

const expect = chai.expect;

chai.use(chaiHttp);

describe('Backend API Tests', () => {
    // Test GET request to root route
    describe('GET /', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
