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
    public partial class Form12 : Form
    {
        public Form12()
        {
            InitializeComponent();
            /*            for(int i=0; i < 10; i++)
                        {
                            chartSalary.Series["Salary"].Points.AddXY("A", 3000);
                        }
                        */
        }

        private void chart1_Click(object sender, EventArgs e)
        {

        }

        private void Form12_Load(object sender, EventArgs e)
        {


            
        }

        private void button2_Click(object sender, EventArgs e)
        {
            panel_ref.Controls.Clear();
            Form13 f13 = new Form13();

            f13.TopLevel = false;
            panel_ref.Controls.Add(f13);
            f13.Show();

        }

        private void button3_Click(object sender, EventArgs e)
        {
            panel_ref.Controls.Clear();
            Form11 f11 = new Form11();

            f11.TopLevel = false;
            panel_ref.Controls.Add(f11);
            f11.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            panel_ref.Controls.Clear();
            Form14 f14 = new Form14();

            f14.TopLevel = false;
            panel_ref.Controls.Add(f14);
            f14.Show();
        }
    }
}
