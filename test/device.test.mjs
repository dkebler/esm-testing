import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Device from '../src/device'

chai.use(chaiAsPromised)

const expect = chai.expect

let device = new Device('test')

describe('Device Class - ', function () {

  it('Has properties', function () {
    expect(device.id).to.equal('test')
  })

  // function getAllMethodNames(obj) {
  //   let methods = new Set()
  //   while (obj = Reflect.getPrototypeOf(obj)) {
  //     let keys = Reflect.ownKeys(obj)
  //     keys.forEach((k) => methods.add(k))
  //   }
  //   return methods
  // }
  //
  // let methods = getAllMethodNames(device)
  // console.log([...methods])

  // it('Can write and read to actual device', function () {
  //
  // 	device.write(0x09, SET).then(expect(device.read(0x0A)).to.eventually.equal(SET))
  // 		.then(setTimeout(() => device.write(0x09, 0), 3000))
  // 		.catch(err => console.log('an error', err))
  // })
})
