import Link from "next/link";
import styles from "./footer.module.scss";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";
export default function Footer() {
  return (
    <Segment
      vertical
      as="footer"
      style={{
        padding: "4em 0em",
        marginTop: "3em",
        borderTop: "1px solid #f2f2f2",
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h4" content="Nosotros" />
              <List>
                <List.Item>
                  <Link href="/about">
                    <a>Conoce más</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="Servicios" />
              <List>
                <List.Item>
                  <Link href="/">
                    <a>Todos los productos</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Hecho por</Header>
              <p>Cristian Burbano</p>
              <List horizontal style={{ display: "flex" }}>
                <List.Item
                  icon="twitter"
                  style={{ display: "flex" }}
                  content={
                    <a href="https://twitter.com/cristianBurbano">Twitter</a>
                  }
                />
                <List.Item
                  icon="github"
                  style={{ display: "flex" }}
                  content={
                    <a href="https://github.com/cristianBurbano">GitHub</a>
                  }
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="colophon">
          <p className="colophon-entry">
            Icons made by{" "}
            <a
              target="_blank"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>
            {" from "}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
        </div>
      </Container>

      <style jsx>{`
        .colophon {
          text-align: center;
          margin-top: 3.2rem;
          font-size: 0.8rem;
        }
        .colophon-entry {
          color: grey;
          margin-bottom: 0;
        }
      `}</style>
    </Segment>
  );
}
