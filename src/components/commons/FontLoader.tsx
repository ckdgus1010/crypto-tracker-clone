import { Helmet } from "react-helmet-async";

function FontLoader() {
    return (
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300..400&display=swap"
                rel="stylesheet"
            ></link>
        </Helmet>
    );
}

export default FontLoader;
