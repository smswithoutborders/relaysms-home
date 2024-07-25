import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../index.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Features = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const cardContent = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/authorise.jpg" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/compose.jpg" },
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/notification.svg" }
	];

	return (
		<div className="container">
			<div className="row justify-content-center">
				<Row className="justify-content-center mb-4">
					<Col xs={12}>
						<h2 className="text-center move-down-sm section-title">{t("Howitworks.HowItWorks")}</h2>
						<p className="text-center section-subtitle">{t("Howitworks.HowItWorksSubtitle")}</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					{cardContent.map((card, idx) => (
						<Col
							xs={10}
							sm={8}
							md={6}
							lg={4}
							key={idx}
							className="mb-4 d-flex justify-content-center"
						>
							<Card className="custom-card h-100 shadow-sm">
								<Card.Img
									variant="top"
									src={card.imageSrc}
									alt={card.key}
									className="custom-card-img"
								/>
								<Card.Body>
									<Card.Title
										className="custom-card-title"
										style={{ textAlign: isRTL ? "right" : "left" }}
									>
										{t(`Howitworks.${card.title}`)}
									</Card.Title>
									<Card.Text
										className="custom-card-text"
										style={{ textAlign: isRTL ? "right" : "left" }}
									>
										{t(`Howitworks.${card.key}`)}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<Row className="mt-4">
					<Col xs={12}>
						<div className="text-center p-1 howitworks">
							<a
								href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
								target="_blank"
								rel="noreferrer noopener"
								className="getting-started-link"
							>
								{t("Howitworks.GettingStartedButton")}
								<FaArrowCircleRight className="ml-2 arrow-icon" />
							</a>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Features;
