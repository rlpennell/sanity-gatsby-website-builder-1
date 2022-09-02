import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;
const ContactCardWrapper = styled.div``;
function ContactCard({ data }) {
  return (
    <Wrapper>
      {data.map((contactCard, i) => {
        return <ContactCardWrapper></ContactCardWrapper>;
      })}
    </Wrapper>
  );
}

export default ContactCard;
// Contact card needs to be reworked on sanity too
