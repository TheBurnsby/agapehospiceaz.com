<form id="verify-insurance" name="verify-insurance" action="#" method="post">
    <fieldset class="fieldset">
        <legend><strong>Volunteer Inquiry</strong></legend>
        <div class="row">
            <div class="medium-6 columns">
                <label>First Name
                    <input name="first_name" type="text" placeholder="first" required>
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Last Name
                    <input name="last_name" type="text" placeholder="last" required>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <label>City
                    <input name="city" type="text" placeholder="city" required>
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Zip Code
                    <input name="zip" type="number" placeholder="zipcode" maxlength="6">
                </label>
            </div>				
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <label>Phone Number
                    <input name="phone" type="tel" placeholder="phone">
                </label>
            </div>
            <div class="medium-6 columns">
                <label>Email Address
                    <input name="email" type="email" placeholder="email" required>
                </label>
            </div>						
        </div>
        <div class="row">
            <div class="medium-6 columns">
                <p>In what areas are you interested in serving?</p>
                <input id="patient-support" type="checkbox"><label for="patient-support">Patient Support</label>
                <input id="administrative" type="checkbox"><label for="administrative">Administrative</label>
                <input id="bereavement" type="checkbox"><label for="bereavement">Bereavement</label>
                <input id="musician" type="checkbox"><label for="musician">Musician</label>
            </div>
            <div class="medium-6 columns">
                <p>When are you available?</p>
                <input id="mornings" type="checkbox"><label for="mornings">Mornings</label>
                <input id="afternoons" type="checkbox"><label for="afternoons">Afternoons</label>
                <input id="evenings" type="checkbox"><label for="evenings">Evenings</label>
                <input id="weekends" type="checkbox"><label for="weekends">Weekends</label>
            </div>
        </div>
    </fieldset>
    <p>Agape offers an extensive 30 hour training that will not only prepare you for hospice volunteer service, but it will also help prepare you to be truly present with your own family and friends at the end of life.</p>

    <p>By signing this application, I verify that the above information is true to the best of my knowledge and give Agape Hospice and Palliative Care permission to contact my references.</p>
    <p>By clicked 'I Agree' I accept to the terms and verify this as my digital signature.</p>
    <input id="agreement" type="checkbox"><label for="agreement">I Agree</label>
    <div class="row">
        <div class="small-12 medium-4 columns">
            Date:<input name="date" type="date" placeholder="date" required>
        </div>
    </div>
    <div class="buttons-back">
            <button class="button purple" type="submit" value="submit">Submit</button>
            <a href="/how-we-do-it/volunteer/">
            <button class="button purple" type="button">Go Back</button></a>
    </div>
</form>