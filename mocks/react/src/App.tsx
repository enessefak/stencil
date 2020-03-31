import React from "react";

import {
  JsfiLayout,
  JsfiCallToAction,
  JsfiCard,
  JsfiGrid,
  JsfiFormElement,
  JsfiInput,
  JsfiButton
} from "stencil-react";

function App() {
  return (
    <JsfiLayout>
      <aside slot="aside"></aside>
      <header slot="header">
        <p>Ara</p>
      </header>
      <JsfiCallToAction>
        <JsfiButton radius outline color="green" icon="call">
          Answer
        </JsfiButton>

        <JsfiButton radius outline color="red" icon="call">
          Hangup
        </JsfiButton>

        <JsfiButton radius outline color="yellow" icon="hand-right">
          Hold
        </JsfiButton>

        <JsfiButton radius outline icon="swap-horizontal">
          Transfer
        </JsfiButton>

        <JsfiButton radius outline color="green" icon="people">
          Conf
        </JsfiButton>

        <JsfiButton size="sm" radius outline color="red">
          IVR
        </JsfiButton>
      </JsfiCallToAction>

      <JsfiCard>
        <JsfiGrid columns="repeat(auto-fit, 150px)" gap="10px">
          <JsfiFormElement label="Cust No">
            <JsfiInput placeholder="Cust No" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>

          <JsfiFormElement label="Title">
            <JsfiInput placeholder="Title" type="text"></JsfiInput>
          </JsfiFormElement>
        </JsfiGrid>

        <JsfiButton>Submit</JsfiButton>
        <JsfiButton color="red">Home</JsfiButton>
        <JsfiButton color="yellow">Clear</JsfiButton>
        <JsfiButton color="purple">Print</JsfiButton>
      </JsfiCard>

      <JsfiCard>
        <h3>Application</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam
          expedita quam. Ab ipsum repellendus mollitia. Adipisci ipsum alias
          quisquam magni, mollitia, laudantium doloribus optio aperiam eos
          possimus omnis eum!
        </p>
      </JsfiCard>
    </JsfiLayout>
  );
}

export default App;
