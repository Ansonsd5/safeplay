import './index.css'

// mould minimisation images


// dust minimisation images


// pet dander minimisation images

import {useEffect, useRef, useState} from "react";
import {Tooltip} from "@mui/material";
import { dogPlayingWithKid, dust, foldingClothes, girlPlaying, ladyInsideApartment, largeIndustrialFan, manCleaning, manDisinfecting, medicinePills, modernAirPurifier, mould, petDander, plumbingProfessional, pollen, washingPetDog, windowCurtains, windowWithBlinds, womanLayingBed, womenPractisingSelfCare, womenWithMask } from '@/assets/images';

function HayfeverTriggers() {
    const triggerData = [
        {
            label: 'Pollen',
            image: dust,
            minimisation: [
                {
                    image: windowWithBlinds,
                    description: 'During peak allergy season, keep your doors and windows shut. This will help limit the number of allergens that enter your house.'
                },
                {
                    image: womenPractisingSelfCare,
                    description: 'You’re exposed to lots of irritants as you move through the day. Shower before bed. This will remove pollen, mold spores, or other allergens from your skin, nasal passages, and hair.'
                },
                {
                    image: womenWithMask,
                    description: 'Spend less time outdoors during the peak season for your allergies.Wear a mask and sunglasses outside.'
                },
                {
                    image: medicinePills,
                    description: 'Get rid of seasonal allergies before they start by taking over-the-counter medications as per the doctors recommendations.'
                },
                {
                    image: modernAirPurifier,
                    description: 'Use an air purifier. These devices draw indoor air into the device and pass it through a filter. The filter gathers substances like mold, dust, pet dander, and pushes clean air back into the room.'
                }]
        },
        {
            label: 'Mould',
            image: mould,
            minimisation: [
                {
                    image: manDisinfecting,
                    description: 'Regularly clean areas prone to mold growth, such as bathrooms, kitchens, and basements by cleaning with bleach or other mould reduction cleaners.'
                },
                {
                    image: largeIndustrialFan,
                    description: 'Use Ceiling fans and portable fans to ensure there is  adequate ventilation in your home as it reduces moisture buildup.'
                },
                {
                    image: plumbingProfessional,
                    description: 'Regularly check for leaks in roofs, walls, and plumbing. Fix any leaks immediately to prevent water accumulation, which can lead to mold growth.'
                },
                {
                    image: womanLayingBed,
                    description: 'Use a dehumidifier or air conditioner to maintain indoor humidity levels below 50%. Indoor plants can increase humidity levels, so avoid over-watering them. Use plants that naturally reduce indoor humidity.\n'
                }]
        },
        {
            label: 'Dust',
            image: pollen,
            minimisation: [
                {
                    image: foldingClothes,
                    description: 'Beds are just as warm and cozy for dust mites as they are for usAll washable bedding should be changed and cleaned at least weekly in hot water .Add protective coverings to your mattress, box spring, and pillows as they will create a barrier between you and the mattress.'
                },
                {
                    image: manCleaning,
                    description: 'Vacuum as often as you can—ideally daily but at least weekly—to minimize the dust in your home. Carpet especially should be vacuumed often if you\'re not able to wash it. Use a double-layered microfilter bag to contain the dust it picks up.'
                },
                {
                    image: windowCurtains,
                    description: 'If you have heavy drapes on windows consider removing them. Otherwise, they will likely become dust traps—and consequently dust mite traps.Instead, opt for curtains that can be machine washed or wooden blinds that can be dusted regularly.'
                },
                {
                    image: medicinePills,
                    description: 'Get rid of seasonal allergies before they start by taking over-the-counter medications as per the doctors recommendations.'
                },
                {
                    image: ladyInsideApartment,
                    description: 'Clutter has a tendency to get dusty. Things that are piling up accumulate dust if you\'re not moving and cleaning each item often. And consequently, dust mites will move in. So to avoid attracting dust mites, keep a clutter-free home.'
                },
                {
                    image: girlPlaying,
                    description: 'Freeze stuffed toys for at least 24 hours can kill dust mites and their eggs. After freezing, shake or lightly vacuum the toys to remove any dead mites and allergenic particles. By limiting the number of stuffed toys on beds or in bedrooms, you reduce the number of places where dust mites can thrive.'
                }
            ]
        },
        {
            label: 'Pet Dander',
            image: petDander,
            minimisation: [
                {
                    image: dogPlayingWithKid,
                    description: 'Create pet-free zones in your home by keeping pets out of bedrooms and other sleeping areas to reduce exposure to dander while you sleep. Train your pets to stay off furniture, particularly upholstered pieces that can trap dander, and designate specific areas where your pet is allowed, limiting the spread of dander throughout your living space.'
                },
                {
                    image: washingPetDog,
                    description: 'Bathe your pet regularly, ideally once a week, using pet-friendly hypoallergenic shampoos to reduce dander and shedding. Additionally, brush your pet daily to remove loose fur and dander, and consider professional grooming services, especially for pets with longer coats, to further minimize dander and maintain a healthier environment.'
                }
            ]
        },
    ];
    const [selectedTrigger, setSelectedTrigger] = useState(null);
    const minimisationRef = useRef(null);

    useEffect(() => {
        if (selectedTrigger && minimisationRef.current) {
            minimisationRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [selectedTrigger]);

    return (<>
            <div className='hayfever-triggers'>
                {triggerData.map((trigger, index) => (
                    <Tooltip title={selectedTrigger && selectedTrigger.label === trigger.label ? 'Click to Close Tips' : `Click to know ${trigger.label} minimisation tips`}
                             arrow
                             placement="bottom"
                             key={index}>
                        <div key={index}
                             className={`trigger-card ${selectedTrigger && selectedTrigger.label !== trigger.label ? 'reduced-opacity' : ''}`}
                             onClick={() => {
                                 if (selectedTrigger && selectedTrigger.label === trigger.label) {
                                     setSelectedTrigger(null);
                                 } else {
                                     setSelectedTrigger(trigger);
                                 }
                             }}>
                            <img src={trigger.image} alt={trigger.label} className='trigger-icon'/>
                            <div className='trigger-label'>{trigger.label}</div>
                        </div>
                    </Tooltip>
                ))}
            </div>
            {selectedTrigger && (
                <>
                    <p className='minimisation-tips-title' ref={minimisationRef}>{selectedTrigger.label} Minimisation Tips</p>
                    <div className='minimisation-tips'>
                        {selectedTrigger.minimisation.map((minimisation, index) => (
                            <div key={index} className='minimisation-card'>
                                <img src={minimisation.image} alt={selectedTrigger.label} className='minimisation-icon'/>
                                <div className='minimisation-description'>{minimisation.description}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default HayfeverTriggers;