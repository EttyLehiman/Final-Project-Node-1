// // // tests/controller.test.js
// // import chai from 'chai';
// // import sinon from 'sinon';
// // import { getMeetings, getMeetId, addMeet, deleteMeet, updatedMeet } from '../Controllers/meeting.controller.js';
// // import meetModel from '../Models/meet.model.js';

// // const expect = chai.expect;

// // describe('Meeting Controller', () => {
// //   describe('getMeetings', () => {
// //     it('should return all meetings', async () => {
// //       const req = {};
// //       const res = {
// //         status: sinon.stub().returnsThis(),
// //         send: sinon.stub()
// //       };

// //       sinon.stub(meetModel, 'find').returns(Promise.resolve([{ _id: 1, name: 'Test Meeting' }]));

// //       await getMeetings(req, res);

// //       expect(res.status.calledWith(200)).to.be.true;
// //       expect(res.send.calledWith([{ _id: 1, name: 'Test Meeting' }])).to.be.true;
      
// //       meetModel.find.restore();
// //     });
// //   });

// //   describe('getMeetId', () => {
// //     it('should return a meeting by ID', async () => {
// //       const req = { params: { id: 1 } };
// //       const res = {
// //         status: sinon.stub().returnsThis(),
// //         send: sinon.stub()
// //       };

// //       sinon.stub(meetModel, 'findById').returns(Promise.resolve({ _id: 1, name: 'Test Meeting' }));

// //       await getMeetId(req, res);

// //       expect(res.status.calledWith(200)).to.be.true;
// //       expect(res.send.calledWith({ _id: 1, name: 'Test Meeting' })).to.be.true;
      
// //       meetModel.findById.restore();
// //     });
// //   });

// //   // בדיקות נוספות לפונקציות אחרות...
// // });



// test('Add user', () => {
//     const newUser = addCustomer(100, "aaa", "1234", "a@a");
//      expect(newUser.name).toBe("aaa");
//      expect(newUser.password).toBe("1234");
// });



// test('Add user X', () => {
//     expect(() => addUser(null,1234)).toThrow(Error);
  
// });

// test('Add user Y', () => {
//     expect(() => addUser(null,1234)).toThrow(Error);
  
// });
// // test('adds with missing parameter', () => {
// //     expect(addCustomer("3")).toBe(NaN);
// // });
// // test('customer borrow good book', () => {
// //     const flag=borrowBook(1,1234);
// //     expect(flag ).toBe(true);  
// // });
// // test('customer borrow not found book', () => {
// //     const flag=borrowBook(800000000000,1234);
// //     expect(flag ).toBe(false);
  
// // });
// // test('customer borrow not available book', () => {
// //     const flag=borrowBook(2,1234);
// //     expect(flag ).toBe(false);
  
// // });
// // test('customer borrow more from 2 books', () => {
// //     const flag=borrowBook(1,8989);
// //     expect(flag ).toBe(false);
  
// // });
// // test('return book to library', () => {
// //     const flag=returnBook(3,8989);
// //     expect(flag ).toBe(true);
  
// // });
// // test('return book to library that customer didnt take it', () => {
// //     const flag=returnBook(6,8989);
// //     expect(flag ).toBe(false);
// // // });
// import { addUser } from '../Controllers/users.controller.js';

// test('Add user', async () => {
//     const newUser = await addUser(100, "aaa", "1234", "a@a.com");
//     expect(newUser.name).toBe("aaa");
//     expect(newUser.password).toBe("1234");
//     expect(newUser.email).toBe("a@a.com");
// });

// test('Add user with missing fields should throw error', async () => {
//     await expect(addUser(null, "aaa", "1234", "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser(100, null, "1234", "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser(100, "aaa", null, "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser(100, "aaa", "1234", null)).rejects.toThrow(Error);
// });


// test('Add user', async () => {
//     const newUser = await addUser( "aaa", "1234", "a@a.com");
//     expect(newUser.name).toBe("aaa");
//     expect(newUser.password).toBe("1234");
//     expect(newUser.email).toBe("a@a.com");
// });
// // 
// import { addUser } from '../Controllers/users.controller.js';


// test('Add user', async () => {
//     const userPayload = {
//         name: "aaa",
//         password: "1234",
//         email: "a@a.com"
//     };

//     const newUser = await addUser({
//         body: userPayload
//     });

//     expect(newUser.name).toBe("aaa");
//     expect(newUser.password).toBe("1234");
//     expect(newUser.email).toBe("a@a.com");
// });

// test('Add user with missing fields should throw error', async () => {
//     await expect(addUser( "aaa", "1234", "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser( null, "1234", "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser( "aaa", null, "a@a.com")).rejects.toThrow(Error);
//     await expect(addUser( "aaa", "1234", null)).rejects.toThrow(Error);
// });

