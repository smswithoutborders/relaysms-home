import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Blog from "../Components/Blog";
import Faqs from "../Components/FAQs";
import { FaArrowCircleRight } from "react-icons/fa";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n";
import "../App.css";

const cardContent = [
	{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/authoriza.svg" },
	{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/compose.svg" },
	{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/notification.svg" }
];

const Landing = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	return (
		<PageAnimationWrapper>
			<Container fluid className="p-5 bg-light">
				{/* Hero Section */}
				<Row className="justify-content-center align-items-center py-5 header-row">
					<Col
						md={8}
						lg={6} // Adjust the width to 4/12 on large devices
						xl={4} // Adjust the width to 3/12 on extra-large devices
						className={`text-center ${isRTL ? "text-end" : "text-start"} pt-10 pb-5 px-3`}
					>
						<h1 className="display-4 fw-bold mb-3 landing-header">{t("Landing.landingh1")}</h1>
						<p className="lead mb-4 landing-subheader">{t("Landing.landingh2")}</p>
						<div className="d-flex justify-content-center justify-content-md-start">
							<Button variant="primary" size="lg" className="me-3 mb-3 mb-md-0">
								<img
									src="/playstore.svg"
									alt="Android"
									className="img-fluid me-2"
									style={{ width: 24, height: 24 }}
								/>
								{t("Landing.Android")}
							</Button>
							<Button variant="outline-secondary" size="lg">
								<img
									src="/desktop.svg"
									alt="Desktop"
									className="img-fluid me-2"
									style={{ width: 24, height: 24 }}
								/>
								{t("Landing.Desktop")}
							</Button>
						</div>
					</Col>

					<Col md={6} className="text-center">
						<img src="/phone3.png" alt="Hero" className="hero-image" />
					</Col>
				</Row>

				{/* How It Works Section */}
				<Row className="justify-content-center mb-4">
					<Col xs={12}>
						<h2
							className={`text-center section-header ${isRTL ? "text-end" : "text-start"}`}
							style={{
								fontSize: "calc(1.875rem + 1.5vw)",
								fontWeight: "bold",
								padding: "10px",
								borderRadius: "10px"
							}}
						>
							{t("Howitworks.HowItWorks")}
						</h2>
						<p
							className={`text-center section-subheader ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1.10rem + 0.5vw)" }}
						>
							{t("Howitworks.HowItWorksSubtitle")}
						</p>
					</Col>
				</Row>

				{/* Cards Section */}
				<Row className="justify-content-center mb-4 card-row">
					{cardContent.map((card, idx) => (
						<Col xs={10} sm={6} lg={4} key={idx} className="mb-4">
							<Card className="custom-card shadow-sm border-0" data-aos="zoom-in">
								<Card.Img
									variant="top"
									src={card.imageSrc}
									alt={card.key}
									className="custom-card-img"
								/>
								<Card.Body>
									<Card.Title className={`custom-card-title ${isRTL ? "text-end" : "text-start"}`}>
										{t(`Howitworks.${card.title}`)}
									</Card.Title>
									<Card.Text className={`custom-card-text ${isRTL ? "text-end" : "text-start"}`}>
										{t(`Howitworks.${card.key}`)}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>

				{/* Button Section */}
				<Row className="justify-content-center mb-4">
					<Col xs={12}>
						<div className="text-center p-1">
							<Button
								variant="link"
								href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
								target="_blank"
								rel="noreferrer noopener"
								className="text-decoration-none"
								style={{ fontSize: "calc(1.25rem + 0.5vw)" }}
							>
								{t("Howitworks.GettingStartedButton")}
								<FaArrowCircleRight
									size="20px"
									style={{ marginLeft: "8px", transform: "rotate(-30deg)" }}
								/>
							</Button>
						</div>
					</Col>
				</Row>

				{/* Blog Section */}
				<Row className="justify-content-center mb-4">
					<Col>
						<h2
							className={`text-center section-header ${isRTL ? "text-end" : "text-start"}`}
							style={{
								fontSize: "calc(1.500rem + 1.5vw)",
								fontWeight: "bold",
								padding: "10px",
								borderRadius: "10px"
							}}
						>
							{t("Blog.BlogHeader")}
						</h2>
						<p
							className={`text-center section-subheader ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1rem + 0.5vw)" }}
						>
							{t("Blog.BlogSubHeader")}
						</p>
						<Blog />
					</Col>
				</Row>

				{/* FAQs Section */}
				<Row className="justify-content-center mb-4">
					<Col>
						<h2
							className={`text-center section-header ${isRTL ? "text-end" : "text-start"}`}
							style={{
								fontSize: "calc(1.875rem + 1.5vw)",
								fontWeight: "bold",
								padding: "10px",
								borderRadius: "10px"
							}}
						>
							{t("FAQ.FAQ")}
						</h2>
						<p
							className={`text-center section-subheader ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1.10rem + 0.5vw)" }}
						>
							{t("FAQ.FAQSubheader")}
						</p>
						<Faqs />
					</Col>
				</Row>
			</Container>
		</PageAnimationWrapper>
	);
};

export default Landing;
