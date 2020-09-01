import React from 'react';
class SkillImage extends React.Component {
// eslint-disable-next-line no-useless-constructor
  constructor(props) {
  super(props);
  }
  render() {
    return(
        <div className="tile is-parent is-shady is-2">
            <article className="tile is-child notification is-white">
             <p className="title">{this.props.skill}</p>
              <figure className="image is-4by3">
                  <img src={this.props.imageSRC} alt={this.props.skill} />
              </figure>
            </article>
        </div>)}
}

function Portfolio() {
return (
<div>
   <section className="hero is-info is-medium is-bold">
      <div className="hero-body">
         <div className="container has-text-centered">
            <h1 className="title has-text-black">
               PORTFOLIO
            </h1>
            <h3 className="subtitle has-text-black">
               Web Application
            </h3>
            <h2 className="subtitle is-family-code">
               A web application that I created for people to have a visual of my work,education and experience.
            </h2>
         </div>
      </div>
   </section>
   <section className="container">
      <div className="intro column is-5 has-text-left ">
         <p className="title has-text-success is-family-code">Development Process</p>
      </div>
      <div className="intro is-5 has-text-left">
         <p className="subtitle is-family-code ">I created this website using React to practice with JSX.Moreover, I wanted to have a better idea on how to properly use components, state ,and props in React.</p>
      </div>
      <div className="sandbox ">
         <div className="tile is-ancestor">
            <SkillImage skill="React" imageSRC="https://wn4mna.bn.files.1drv.com/y4mtYvsCbo5kMfOHRB0-joWebUYRgxeGMKslbsLiq9lgNFYjdyQscE9idphGLP1kDeoM9bphjezIOmVWPsplJk-zSIY1IUQ6ZwTT1tExbJQQIv60EqKkNWVJTKH6bFog7iV77sfzQpN5Yb63msqn9HhS6JZ9VMsMIW1oG3r4YSIoYltdXkuOfbEDCBUrJRfdJG5hk7Yn0twCklBiX35OtJxDQ?"/>
            <SkillImage skill="JSX" imageSRC="https://wn6ljw.bn.files.1drv.com/y4msbxnS_LAGvOGvEd0j3A49cIAPcC2buJBrm1Cs0DnyKgMw3j6che87uf3OPM-zl9l2N1EjNOhkDFer-fJs_Uqx6EwDZnzRHeMQ0P9iB1NrJG4qNF1NfcZjKGXNnxH_vs6cx5l6bKislX__KYSVb9Zm5Ko98L0OBLEFTKKWzjBEean8HaAjQZPCi8wE1geyPIhD8AzJq3OvL7IyybgIIho5g?"/>
            <SkillImage skill="npm" imageSRC="https://jjwvpw.bn.files.1drv.com/y4mVSNb0fzszDGrMaoVbed6l_iAS3YurSb0TQBmdXkmyspcayVlk0vgI1YvgWx30ABVJw3NrBV68xktgVTPFk0mSWk8SgR9aeVvaHFJSWByi_IrvIOJwRSp3DWQIXjMIDNwEWBcKNft7I5UtYNreSlDG2WWpfBBXDi_t6u0BU1Un4I-O6cexPIagi8LP5-fkuZ62Ab--uLmwZRlnZFmVjuuhQ?"/>
            <SkillImage skill="HTML" imageSRC="https://8sapbq.bn.files.1drv.com/y4mkRnW61WeK4VoJXjkBeMtEtHSBEx6nuWKosaF1EVSi3LkSlLB2mSbPxq5sCokWWUaQWbEMlfjIDhEoyfCA8sbWiLl87kM6e2aLREa35wkMZcUIv6Px2JzP-1xOOV16PwDzs7E1c4OmFuF9B-fHLEEDJLbD3bHsA157Fhwv50cKx32DkZTY9s1sFqUchIO182qhyMnq6CQEBiJQQXKyb3dhg?"/>
            <SkillImage skill="Bulma" imageSRC="https://jwpqpq.bn.files.1drv.com/y4mxZytAcIwUKqY0c89CvDaBzarOZHUs9TjBLAf4xXdfkl3OSXtPFVUAcErQtfYzJbsmf3rjuEGGpr3Vwq1GJZXdr5Dx9l_DhI2rgnnvzPuCLzJ7774Nh1LGySowWOEfoucS-PjegRDX3LEy2DxI6M5bAnYwqpQBBcSzyDZb48dXdC0UGdHayPwMMbV8kFQ95zKkLAfxe_lxod9NzVyglcPhg?"/>
            <SkillImage skill="Netlify" imageSRC="https://jwpcyq.bn.files.1drv.com/y4mv5_QIqIt4KWrg1o9Fo9Vxq4O2awzgMJkiKZQpwQJ4VgGrATnb2AN_pxcoGVym7F6j3q3REKfkVdVjzlEOrxa0d-hUFIS1-O9tOIlxgY-l1hradZtC3eOrcE_3G51oYrPXJ3r5G0CdoNOOAWz1o_aR93taGoUBXylkRuddentL87_0b5gJ2KlHtytbma_OJPpkeOODBmaa_RFwxkKUSPS8Q?"/>
         </div>
      </div>
   </section>
</div>
)}
export default Portfolio;