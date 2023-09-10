import Axios from "axios";
export default class Api {
  backendURL = "https://bot.onboarding.club";

  async signup(signupData) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/auth/login`,
        data: signupData,
      });
      if (resp.status === 204) {
        const response = { status: true, alreadySent: true };
        return response;
      } else return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 204) {
        const response = { status: true, alreadySent: true };
        return response;
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async walletUpdate(walletData) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/user/wallet`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
        data: walletData,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async sendMessage(data) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/message`,
        headers: {
          "nunu": "iamsexyboi69",
        },
        data: data,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async getProfile() {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/comments`,
        headers: {
          nunu: "iamsexyboi69",
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async verify(OTPData) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/auth/verify`,
        data: OTPData,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 400) {
        return "err";
      }
      return err.response.data;
    }
  }
  async addEvent(eventData) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/org/event`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
        data: eventData,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async getOrgEvent() {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/org/event`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }

  async getAllEvents() {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/user/events`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }

  async getEvent(eventId) {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/user/event/${eventId}`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async getTicket(ticketID) {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/user/ticket/${ticketID}`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async getQRSecret() {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/user/qr`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async markAttendance(ticketID) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/org/qr`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
        data: ticketID,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
  async claim(ticketID) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/org/claim`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
        data: ticketID,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }

  async purchaseTicket(eventData) {
    try {
      const resp = await Axios({
        method: "post",
        url: this.backendURL + `/user/ticket`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
        data: eventData,
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }

  async getTickets() {
    try {
      const resp = await Axios({
        method: "get",
        url: this.backendURL + `/user/tickets`,
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      });
      return resp.data;
    } catch (err) {
      if (!err.response) {
        return "err";
      }
      if (err.response.status === 500 || err.response.status === 401) {
        return "err";
      }
      return err.response.data;
    }
  }
}
