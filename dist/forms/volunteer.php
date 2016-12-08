<form id="verify-insurance" name="verify-insurance" action="#" method="post">
    <fieldset class="fieldset">
        <legend><strong>Volunteer Inquiry</strong></legend>
        <div class="row">
            <div class="medium-6 columns">
                <label>First Name
                    <input name="First Name" type="text" placeholder="first" required>
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Last Name
                    <input name="Last Name" type="text" placeholder="last" required>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <label>City
                    <input name="City" type="text" placeholder="city" required>
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Zip Code
                    <input name="Zip" type="number" placeholder="zipcode" maxlength="6">
                </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <label>Phone Number
                    <input name="Phone" type="tel" placeholder="phone">
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Email Address
                    <input name="Email" type="email" placeholder="email" required>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <p>In what areas are you interested in serving?</p>
                <input id="patient-support" name="Patient Support" type="checkbox"><label for="patient-support">Patient Support</label>
                <input id="administrative" name="Administrative" type="checkbox"><label for="administrative">Administrative</label>
                <input id="bereavement" name="Bereavement" type="checkbox"><label for="bereavement">Bereavement</label>
                <input id="musician" name="Musician" type="checkbox"><label for="musician">Musician</label>
            </div>
            <div class="medium-6 columns">
                <p>When are you available?</p>
                <input id="mornings" name="Mornings" type="checkbox"><label for="mornings">Mornings</label>
                <input id="afternoons" name="Afternoons" type="checkbox"><label for="afternoons">Afternoons</label>
                <input id="evenings" name="Evenings" type="checkbox"><label for="evenings">Evenings</label>
                <input id="weekends" name="Weekends" type="checkbox"><label for="weekends">Weekends</label>
            </div>
        </div>
    </fieldset>
    <p>Agape offers an extensive 30 hour training that will not only prepare you for hospice volunteer service, but it will also help prepare you to be truly present with your own family and friends at the end of life.</p>

    <p>By signing this application, I verify that the above information is true to the best of my knowledge and give Agape Hospice and Palliative Care permission to contact my references.</p>
    <p>By clicked 'I Agree' I accept to the terms and verify this as my digital signature.</p>
    <input id="agreement" name="Agreement" type="checkbox"><label for="agreement">I Agree</label>
    <div class="row">
        <div class="small-12 medium-4 columns">
            Date:<input name="Agreement Date" type="date" placeholder="date" required>
        </div>
    </div>
    <div class="buttons-back">
        <button class="button purple" type="submit" value="submit">Submit</button>
        <a href="/how-we-do-it/volunteer/">
        <button class="button purple" type="button">Go Back</button></a>
    </div>
</form>
