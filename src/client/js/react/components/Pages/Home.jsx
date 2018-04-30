import React from 'react';
import {PageHeader, Grid, Col, Row} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';
import ContactForm from '_components/ContactForm/ContactForm';
import ImageComponent from '_components/Image/Image';

const showCaseHeight = 400;

const HomePage = props => {
  const {photos, about, stockPhotos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <SectionCard title="Our Story" textAlign="center"  titleAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              
            </Col>
            <Col xs={12} md={6}>
              <p>{about.company.background}</p>
            </Col>
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Trusted Brands" titleAlign="center" textAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <ImageComponent withBorder src={stockPhotos.brandLogo} />
            </Col>
            <Col xs={6} md={3}>
              <ImageComponent withBorder src={stockPhotos.brandLogo} />
            </Col>
            <Col xs={6} md={3}>
              <ImageComponent withBorder src={stockPhotos.brandLogo} />
            </Col>
            <Col xs={6} md={3}>
              <ImageComponent src={stockPhotos.brandLogo} />
            </Col>
          </Row>
        </Grid>
      </SectionCard>
    </div>
  );
}

export default HomePage;