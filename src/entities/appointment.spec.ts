import {expect, test} from 'vitest';
import { Appointment } from './appointment';
import { getFutureDate } from '../tests/utils/get-future-date';

test('create an appointment', () => {

    const startsAt = getFutureDate('2022-09-09')
    const endsAt = getFutureDate('2022-09-12')
    
 
    const appointment = new Appointment({
        customer: "Pedro",
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual("Pedro")
})

test('cannot create an apppointment with end date before start date', () => {
    
    const startsAt = getFutureDate('2022-09-11')
    const endsAt = getFutureDate('2022-09-10')
    

    expect(()=>{
        return new Appointment({
            customer: "Pedro",
            startsAt,
            endsAt
        })
    }).toThrow()
})

test('cannot create an apppointment with start date before now date', () => {
    
    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() + 3)
    
    expect(()=>{
        return new Appointment({
            customer: "Pedro",
            startsAt,
            endsAt
        })
    }).toThrow()
})