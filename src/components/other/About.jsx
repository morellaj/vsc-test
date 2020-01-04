// Package dependencies
import React, {Fragment} from 'react';
import styled from 'styled-components';


// Component dependencies
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function Home(props){ 
  return (
    <Fragment>
      <Navbar/>
      <Container>
        <Title>About</Title>
        <Heading>Why Learning is the Solution?</Heading>
        <Text>
          Why Learning is the Solution?
  As parents, we feel responsible for our children and their future.  And you won’t find one of us who isn’t terrified by that responsibility.
  “My son just hit his sister with a rock.  I never imagined he could do something so vicious.  What am I supposed to do?”
  “I just caught my daughter lying to me for the first time.  I got really angry, probably too angry.  But I can’t have her grow up to be a liar…”
  “My son struggles to control his temper and constantly throws tantrums.  Nothing I do seems to help.”
  Any of this sound familiar?  This responsibility is made more daunting by a lack of outside help or resources.  Parenting books and online articles provide advice, but applying that advice in the heat-of-the-moment is nearly impossible, and who the has time to read all that anyways?  Counselors and therapists are effective, but extremely expensive.  For the most part, we are on our own.   
  Learning is the Solution hopes to address this problem by providing online solutions for behavioral challenges that are fun, easy to access, and easy to use.  Whenever a parent is concerned about their child’s behavior, they don’t need to panic or punish.  They just need to sit down with their child and read a book on Learning is the Solution.
  At Learning is the Solution, we believe there are no bad kids, only kids that need to learn.

  But really…  Why Learning is the Solution?
  We have a bit of a confession to make.  There is a deeper “why?” that motivated the creation of Learning is the Solution.
  At Learning is the Solution, we believe every child has the potential to grow into powerful, responsible adult who makes meaningful contributions to the greater good.  But that potential can only be reached we provide kids with the guidance and experiences they need.  Learning is the Solution hopes to provide parents with the tools they need to raise a generation of kids who change the world.

  What is Learning is the Solution trying to accomplish?
  Here are the main things we hope to accomplish with the resources we provide parents:
  •	Guide kids towards better behavior today
  •	Plant the seeds for a meaningful future
  •	Complement and reinforce efforts by parents
  •	Improve parent-child communication by providing common language and common expectations
  •	Relieve parents’ fears and help them have realistic expectations of their children
  •	Align parenting techniques to what has been proven effect by research

  What is Learning is the Solution NOT trying to accomplish?
  It’s also probably important to acknowledge the things that our resources probably won’t accomplish:
  •	Replacing parental efforts and professional counseling
  •	Addressing severe behavioral problems – professional help should be sought
  •	Correcting behavior immediately and with 100% success

        </Text>
      </Container>
      <Footer/>
    </Fragment>
  );
}


// Styling
const Container = styled.div`
 
`

const Title = styled.div`

`

const Heading = styled.div`

`

const Text = styled.div`

`