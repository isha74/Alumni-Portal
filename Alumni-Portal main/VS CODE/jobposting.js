document.addEventListener("DOMContentLoaded", function () {
    const jobContainer = document.getElementById("jobContainer");

    // Function to fetch job postings
    async function fetchJobs() {
        try {
            const response = await fetch("https://publicapis.io/careerjet-api");
            const data = await response.json();

            // Clear existing job postings
            jobContainer.innerHTML = "";

            // Iterate through job postings and append to the container
            data.jobs.forEach(job => {
                const jobElement = document.createElement("div");
                jobElement.className = "job-posting";
                jobElement.innerHTML = `
                    <h2>${job.title}</h2>
                    <p><strong>Location:</strong> ${job.locations}</p>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Description:</strong> ${job.description}</p>
                    <a href="${job.url}" class="apply-btn" target="_blank">Apply Now</a>
                `;
                jobContainer.appendChild(jobElement);
            });
        } catch (error) {
            console.error("Error fetching jobs:", error);
            jobContainer.innerHTML = "<p>Failed to load job postings. Please try again later.</p>";
        }
    }

    // Fetch jobs on page load
    fetchJobs();
});
