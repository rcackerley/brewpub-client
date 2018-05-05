import React from 'react';

let MailChimpForm = () =>
  <div className="email-form" id="mc_embed_signup">
    <form action="https://twitter.us18.list-manage.com/subscribe/post?u=5dd2b0e41cdc30d4610aa679b&id=d5e7863af9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div className="email-form" id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <input type="email" placeholder="type your email address" name="EMAIL" className="required email" id="mce-EMAIL" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: 'none'}} />
          <div className="response" id="mce-success-response" style={{display: 'none'}} />
        </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_5dd2b0e41cdc30d4610aa679b_d5e7863af9" tabIndex={-1} defaultValue /></div>
        <div className="clear"><button type="submit" defaultValue="Subscribe" id="mc-embedded-subscribe" className="button">subscribe</button></div>
      </div>
    </form>
  </div>

export default MailChimpForm;
