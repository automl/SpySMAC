
import unittest

from cave.reader.runs_container import RunsContainer
from cave.reader.configurator_run import ConfiguratorRun


class TestRunContainer(unittest.TestCase):

    def test_runs_container(self):
        """ test whether runs_container-methods work as expected """
        folders = ["examples/bohb"]

        runs_container = RunsContainer(folders, file_format="BOHB")


        #folder = "test/test_files/test_reader/SMAC2/run-1"
        #ta_exec_dir = "test/test_files/test_reader/SMAC2/run-1/smac-output/aclib/state-run1/"
        #cr = ConfiguratorRun(folder, ta_exec_dir, file_format="SMAC2", validation_format=None)
        #self.assertEqual(len(cr.original_runhistory.data), 99)
        #self.assertEqual(len(cr.original_runhistory.get_all_configs()), 43)
        #self.assertIsNone(cr.validated_runhistory)
        #self.assertEqual(len(cr.combined_runhistory.data), 99)
        #self.assertEqual(len(cr.combined_runhistory.get_all_configs()), 43)

        #cr = ConfiguratorRun(folder, ta_exec_dir, file_format="SMAC2", validation_format="SMAC2")
        #self.assertEqual(len(cr.original_runhistory.data), 99)
        #self.assertEqual(len(cr.original_runhistory.get_all_configs()), 43)
        #self.assertEqual(len(cr.validated_runhistory.data), 27)
        #self.assertEqual(len(cr.validated_runhistory.get_all_configs()), 3)
        #self.assertEqual(len(cr.combined_runhistory.data), 126)
        #self.assertEqual(len(cr.combined_runhistory.get_all_configs()), 45)
