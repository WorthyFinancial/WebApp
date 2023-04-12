import { Heading } from "@chakra-ui/react";

const PageTitle = ({title}) =>{
    return(
        <Heading as="h2" fontWeight="600" fontSize="2.0rem" letterSpacing="-0.5px"> 
        {title}
        </Heading>
    )

}

export default PageTitle;