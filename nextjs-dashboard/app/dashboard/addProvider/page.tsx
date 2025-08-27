export default function AddProviderPage() {
    return (
        <>
            <div className="" id="">
                <form>
                    <div>
                        <label htmlFor='name'>Name of Lawyer, NonProfit, Law Firm: </label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div>
                        <label htmlFor='type'>Type of Provider: </label>
                        <select name='type' id='type'>
                            <option value=''>Select Type of Provider</option>
                            <option value='lawyer'>Lawyer/Law Firm</option>
                            <option value='nonprofit'>NonProfit</option>
                            <option value='public-defender'>Public Defender</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='streetNumber'>Street Number: </label>
                        <input type='number' name='streetNumber' id='streetNumber' />
                    </div>
                    <div>
                        <label htmlFor='streetName'>Street Name: </label>
                        <input type='text' name='streetName' id='streetName' />
                    </div>
                    <div>
                        <label htmlFor='city'>City: </label>
                        <input type='text' name='city' id='city' />
                    </div>
                    <div>
                        <label htmlFor='county'>County: </label>
                        <input type='text' name='county' id='county' />
                    </div>
                    <div>
                        <label htmlFor='state'>State: </label>
                        <select name='state' id='state'>
                            <option>Select a state</option>
                            <option value='AL'>Alabama</option>
                            <option value='AK'>Alaska</option>
                            <option value='AZ'>Arizona</option>
                            <option value='AR'>Arkansas</option>
                            <option value='CA'>California</option>
                            <option value='CO'>Colorado</option>
                            <option value='CT'>Connecticut</option>
                            <option value='DE'>Delaware</option>
                            <option value='FL'>Florida</option>
                            <option value='GA'>Georgia</option>
                            <option value='HI'>Hawaii</option>
                            <option value='ID'>Idaho</option>
                            <option value='IL'>Illinois</option>
                            <option value='IN'>Indiana</option>
                            <option value='IA'>Iowa</option>
                            <option value='KS'>Kansas</option>
                            <option value='KY'>Kentucky</option>
                            <option value='LA'>Louisiana</option>
                            <option value='ME'>Maine</option>
                            <option value='MD'>Maryland</option>
                            <option value='MA'>Massachusetts</option>
                            <option value='MI'>Michigan</option>
                            <option value='MN'>Minnesota</option>
                            <option value='MS'>Mississippi</option>
                            <option value='MO'>Missouri</option>
                            <option value='MT'>Montana</option>
                            <option value='NE'>Nebraska</option>
                            <option value='NV'>Nevada</option>
                            <option value='NH'>New Hampshire</option>
                            <option value='NJ'>New Jersey</option>
                            <option value='NM'>New Mexico</option>
                            <option value='NY'>New York</option>
                            <option value='NC'>North Carolina</option>
                            <option value='ND'>North Dakota</option>
                            <option value='OH'>Ohio</option>
                            <option value='OK'>Oklahoma</option>
                            <option value='OR'>Oregon</option>
                            <option value='PA'>Pennsylvania</option>
                            <option value='RI'>Rhode Island</option>
                            <option value='SC'>South Carolina</option>
                            <option value='SD'>South Dakota</option>
                            <option value='TN'>Tennessee</option>
                            <option value='TX'>Texas</option>
                            <option value='UT'>Utah</option>
                            <option value='VT'>Vermont</option>
                            <option value='VA'>Virginia</option>
                            <option value='WA'>Washington</option>
                            <option value='WV'>West Virginia</option>
                            <option value='WI'>Wisconsin</option>
                            <option value='WY'>Wyoming</option>
                            <option value='DC'>District of Columbia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='zip'>Zip Code: </label>
                        <input type='text' name='zip' id='zip' />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone Number: </label>
                        <input type='tel' name='phone' id='phone' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='website'>Website: </label>
                        <input type='url' name='website' id='website' />
                    </div>
                    <br />
                    <input type='submit' value='Add Provider' />
                </form>
            </div>
        </>
    )
}