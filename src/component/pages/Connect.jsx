import React from "react";

function Connect() {
  return (
    <>
      <div>Connect</div>
      <div style={{ color: "white" }}>
        <form
          action="mailto:contact@yourdomain.com"
          method="POST"
          encType="text/plain"
          name="EmailForm"
        >
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="ContactComments">Message:</label>
          <br />
          <textarea
            name="”ontactComments”"
            id="”ontactComments”"
            cols="20"
            rows="6"
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default Connect;

// <div>
//   <form action=mailto:contact@yourdomain.com” method=”POST” enctype=”text/plain” name=”EmailForm”>
//   <label htmlFor="name">Name:</label>
//   <br />
//   <input type="text" id="name" name="name" /><br />
//     <label htmlFor="ContactComments">Message:</label><br>
//       <textarea id=”ontactComments” rows=”6″ cols=”20″></textarea>
//   <input type="submit" value="Send" />
//   </form>
// </div>
