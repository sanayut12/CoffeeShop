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
        public Form8(string id)
        {
            InitializeComponent();
            label_id.Text = id;
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            panel_home.Controls.Clear();

            Form7 f7 = new Form7();
            f7.TopLevel = false;
            panel_home.Controls.Add(f7);
            f7.Show();
        }
    }
}
