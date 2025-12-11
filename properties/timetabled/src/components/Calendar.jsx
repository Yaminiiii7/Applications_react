import Event from './Event';

const Calendar=()=>{
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead> 
                <tbody>
                        <tr>
                            <td className="time">8 AM</td>
                            <Event event='🍽️ Breakfast' location='📍 Republique' color ='green'/>
                            <td></td>
                            <td></td>
                            <Event event='🎬 Movie' location='📍 TCL Chinese Theatre' color='purple'/>
                            <td></td>
                            <Event event='🏃 Workout' location='📍 Equinox West Hollywood' color ='blue'/>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">9 AM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='🧘 Meditation' location='📍 Runyon Canyon' color='blue'/>
                        </tr>
                        <tr>
                            <td className="time">10 AM</td>
                            <td></td>
                            <td></td>
                            <Event event='🎨 Art Institute' location='📍 LACMA' color='magenta'/>
                            <td></td>
                            <Event event='🏆 Sports' location='📍 Staples Center' color='blue'/>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">11 AM</td>
                            <td></td>
                            <Event event='🧃 Juice' location='📍 Pressed Juicery' color='green'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">12 AM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='🍕 Lunch' location='📍 Gjelina Venice' color='green'/>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">1 PM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='Fancy Dinner 🎩' location='📍 Maple & Ash' color='green'/>
                        </tr>
                        <tr>
                            <td className="time">2 PM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='🎪 Circus' location='📍 Downtown LA' color='magenta'/>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">3 PM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='🥗 Salad' location='📍 Republique' color='green'/>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">4 PM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='☕ Coffee Break' location='📍 Intelligentsia Coffee' color='lime'/>
                            <td></td>
                            <td></td>                    
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">5 PM</td>
                            <td></td>
                            <Event event='🏊 Swimming' location='📍 Santa Monica Beach' color='blue'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='✈️ Travel' location='📍 LAX Airport' color='cyan'/>
                        </tr>
                </tbody>                     
            </table>
        </div>
    )
}

export default Calendar;