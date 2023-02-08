$(document).ready(function () {
    function fetchData() {
        const inputValue = $("#inputValue").val();
        if (inputValue) {
            fetch(`https://cors-anywhere.herokuapp.com/ipinfo.io/${inputValue}?token=33045a8dee23b1`)
                .then(response => response.json())
                .then(data => {
                    $("#ip").text(data.ip);
                    $("#hostname").text(data.hostname);
                    $("#anycast").text(data.anycast);
                    $("#city").text(data.city);
                    $("#region").text(data.region);
                    $("#country").text(data.country);
                    $("#loc").text(data.loc);
                    $("#postal").text(data.postal);
                    $("#timezone").text(data.timezone);
                    $("#asn").text(data.asn.asn);
                    $("#asnName").text(data.asn.name);
                    $("#companyName").text(data.company.name);
                    $("#companyDomain").text(data.company.domain);
                    $("#privacyVPN").text(data.privacy.vpn);
                    $("#privacyProxy").text(data.privacy.proxy);
                    $("#privacyTor").text(data.privacy.tor);
                    $("#privacyRelay").text(data.privacy.relay);
                    $("#privacyHosting").text(data.privacy.hosting);
                    $("#abuseAddress").text(data.abuse.address);
                    $("#abuseCountry").text(data.abuse.country);
                    $(".info").show();
                    $(".details").show();
                });
        }
    }

    $("form").submit(function (e) {
        e.preventDefault();
        fetchData();
    });
});