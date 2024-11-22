"use client";

export default function Login() {

    const page = "https://dev-45cqnlol3elffk2n.us.auth0.com/authorize?response_type=code&client_id=t6GbvGDxdSIUlkPpCz2yVYAQw0Gm6r3n&redirect_uri=https://api.color.wtf/authenticate";
    window.location.href = page
    return null;
}
