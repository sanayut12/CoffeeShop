using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace สมัครสมาชิก
{
    public partial class Form8 : Form
    {
        public Form8(string ID,string Level)
        {
            InitializeComponent();
            label_id.Text = ID;
            label_level.Text = Level;
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();
            //add menu to db
            Form7 f7 = new Form7();
            f7.TopLevel = false;
            panel_home.Controls.Add(f7);
            f7.Show();
        }

        private void pictureBox6_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();

            Form10 f10 = new Form10();
            f10.TopLevel = false;
            panel_home.Controls.Add(f10);
            f10.Show();
        }

        private void pictureBox7_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();
            //order
            Form4 f4 = new Form4();
            f4.TopLevel = false;
            panel_home.Controls.Add(f4);
            f4.Show();
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();
            //bill
            Form3 f3 = new Form3();
            f3.TopLevel = false;
            panel_home.Controls.Add(f3);
            f3.Show();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();
        }

        private void pictureBox9_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();

            string staffid = label_id.Text;
            //check bill
            Form5 f5 = new Form5(staffid);
            f5.TopLevel = false;
            panel_home.Controls.Add(f5);
            f5.Show();
        }

        private void pictureBox8_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void pictureBox5_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();

            Form12 f12 = new Form12();
            f12.TopLevel = false;
            panel_home.Controls.Add(f12);
            f12.Show();

        }
    }
}
