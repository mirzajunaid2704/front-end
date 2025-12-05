async function getRecommendation() {
    const data = {
        age: parseInt(document.getElementById("age").value),
        income: parseInt(document.getElementById("income").value),
        is_farmer: document.getElementById("farmer").value === "Yes" ? 1 : 0,
        is_woman: document.getElementById("woman").value === "Yes" ? 1 : 0,
        is_student: document.getElementById("student").value === "Yes" ? 1 : 0,
        caste: document.getElementById("caste").value,
        district: document.getElementById("district").value
    };

    try {
        const response = await fetch("https://back-end-pecr.onrender.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            document.getElementById("result").innerText =
                "Backend Error: " + response.status;
            return;
        }

        const result = await response.json();

        document.getElementById("result").innerText =
            "Recommended Scheme: " + result.recommended_scheme;
    } 
    catch (error) {
        document.getElementById("result").innerText =
            "Error connecting to backend. Maybe Render backend is sleeping.";
        console.error(error);
    }
}